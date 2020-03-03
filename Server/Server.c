

#include<stdio.h>
#include<string.h>
#include<stdlib.h>
#include<unistd.h>
#include<sys/types.h>
#include<sys/stat.h>
#include<sys/socket.h>
#include<arpa/inet.h>
#include<netdb.h>
#include<signal.h>
#include<fcntl.h>

#define BYTES 1024
#define PORT "10002"

int listenfd, clients;
void startServer(char *);
void respond();
void sendToCOM(char*);

int main(int argc, char* argv[]) {
	struct sockaddr_in clientaddr;
	socklen_t addrlen;
	clients = -1;
	startServer(PORT);
	// ACCEPT connections
	while(1) {
		addrlen = sizeof(clientaddr);
		clients = accept (listenfd, (struct sockaddr *) &clientaddr, &addrlen);
		if(clients < 0)
			error ("accept() error");
		else
      respond();
	}
	return 0;
}

void startServer(char *port) {
	struct addrinfo hints, *res, *p;
	// getaddrinfo for host
	memset( &hints, 0, sizeof(hints) );
	hints.ai_family = AF_INET;
	hints.ai_socktype = SOCK_STREAM;
	hints.ai_flags = AI_PASSIVE;
	if ( getaddrinfo(NULL, port, &hints, &res) != 0 ) {
		perror ("getaddrinfo() error");
		exit(1);
	}
	// socket and bind
	for (p = res; p != NULL; p = p->ai_next) {
		listenfd = socket (p->ai_family, p->ai_socktype, 0);
		if (listenfd == -1) continue;
		if ( bind(listenfd, p->ai_addr, p->ai_addrlen ) == 0) break;
	}
	if (p==NULL) {
		perror ("socket() or bind()");
		exit(1);
	}
	freeaddrinfo(res);
	// listen for incoming connections
	if ( listen (listenfd, 1000000) != 0 ) {
		perror("listen() error");
		exit(1);
	}
}

void respond()
{
	char mesg[99999], *reqline[3], data_to_send[BYTES], path[99999];
	int rcvd, fd, bytes_read;

	memset( (void*)mesg, (int)'\0', 99999 );

	rcvd=recv(clients, mesg, 99999, 0);

	if (rcvd<0)    // receive error
		fprintf(stderr,("recv() error\n"));
	else if (rcvd==0)    // receive socket closed
		fprintf(stderr,"Client disconnected upexpectedly.\n");
	else { 
    // message received
		reqline[0] = strtok (mesg, " \t\n");
		if ( strncmp(reqline[0], "GET\0", 4)==0 )
		{
			reqline[1] = strtok (NULL, " \t");
			reqline[2] = strtok (NULL, " \t\n");

			sendToCOM(reqline[1]);
		}
	}
	//Closing SOCKET
	shutdown (clients, SHUT_RDWR);
	close(clients);
	clients=-1;
}

void sendToCOM(char *pro)
{
	int myfd = open("/dev/ttyAM0", O_RDWR | O_NOCTTY | O_NDELAY);
	write(myfd, pro +1, strlen(pro +1));
	close(myfd);
}