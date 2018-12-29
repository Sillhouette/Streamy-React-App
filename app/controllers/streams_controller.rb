##
# => StreamsController handles the routing of the stream object to the front-end
##
class StreamsController < ApplicationController
  # => Set the stream using the id in params for the show, update, and delete actions
  before_action :set_stream, only: [:show, :update, :destroy]

  # => Show action renders a JSON response for a single stream
  def show
    json_response(@stream)
  end

  # => Index action renders a JSON resonse for all of the streams
  def index
    @streams = Stream.all
    json_response(@streams)
  end

  # => Create action creates a new stream using params
  def create
    @stream = Stream.create!(stream_params)
    json_response(@stream, :created)
  end

  # => Update action updates an existing stream using params
  def update
    @stream.update(stream_params)
  end

  # => Destroy action deletes the stream specified in params
  def destroy
    @stream.destroy
    head :no_content
  end

  #Start private helper methods
  private

    # => Whitelist params before passing them to an action
    def stream_params
      params.permit(:title, :userId, :description, :stream)
    end

    # => Fetch a stream from the database to be used in a action
    def set_stream
      @stream = Stream.find(params[:id])
    end
end
