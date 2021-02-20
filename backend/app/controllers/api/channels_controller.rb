class Api::ChannelsController < ApplicationController
  skip_before_action :authorized
  def index
    channels = Channel.all
    render Json: channels
  end

  def create
    @channel = Channel.new(channel_params)
      @channel.save
  end


  private

  def channel_params
    params.require(:channel).permit(
      :id,
      :name,
     )
  end
end


