class Api::ChannelsController < ApplicationController
  skip_before_action :authorized
  def index
    channels = Channel.all
    render json: channels
  end

  def create
    @channel = Channel.new(channel_params)
    if @channel.valid?
      @channel.save
    end
  end

  private

  def channel_params
    params.require(:channel).permit(
      :name,
      :task_id
    )
  end
  
end

