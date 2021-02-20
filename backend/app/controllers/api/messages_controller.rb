class Api::MessagesController < ApplicationController
  def index
    messages = Message.all
    render Json: messages
  end
  def create
    @message = Message.new(message_params)
    if @message.valid?
      @message.save
    end
  end

  private 

  def message_params
    params.require(:task).permit(
      :channel_id
      :text
    )

end
