# Welcome to Streamy

## What's Streamy?

Streamy is a web-application that uses CRUD to create, read, update, and delete streams, you can start the three servers and stream video to your site

## Rails Server

The _**Rails Server**_ Handles the backend API, this is where your streams are created and stored for later access.

## React Server

The _**React Server**_ is responsible displaying all of the data onto the webpage. This is a single page application that uses React components and a Redux state container to handle to creation and display of the data stored in the rails api through asynchronous requests to the server

## Streaming Server

The _**Streaming Server**_ is an RTMP node media server that is hooked up to the client and allows users to stream video for the client to display. More information on this server is located here: `https://github.com/illuspas/Node-Media-Server`

## Getting Started

1.  Start by cloning down the repository to your desktop by using this command:

        $ git clone rails git@github.com:Sillhouette/Streamy-React-App.git

2.  Change directory to the freshly cloned repo and install the gem bundle by running:

        $ bundle install

3.  Migrate the database using:

         $ rake db:migrate

4.  Start the three servers at the same time using the following command:

         $ rake start

5.  Go to `http://localhost:3000` and you'll see the webpage displayed.

6.  To stream content to the streaming server download Open Brodcaster Software(OBS) from here: `https://obsproject.com/`. Add a display capture source as well as an audio input source to stream from. Then go to the OBS settings >> Stream and use the following URL: `rtmp://localhost/live`. The stream key to use is simply the id of the stream you want to stream to, located after the final '/' of the stream view page's url. For example, the id for `http://localhost:3000/streams/3` would be '3'. Then simply click start streaming and the stream will be broadcast to the streaming server, the client will access the stream from the url that the stream is being broadcast to.

## Contributing

We encourage you to contribute to Streamy! Please submit issues and pull requests and they will be reviewed.

## License

Ruby on Rails is released under the [MIT License](https://opensource.org/licenses/MIT).
