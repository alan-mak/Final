class Api::MessagesController < ApplicationController
  skip_before_action :authorized

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
    params.require(:message).permit(
      :channel_id,
      :sender_id,
      :text
    )
  end


end
