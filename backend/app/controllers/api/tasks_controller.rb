class Api::TasksController < ApplicationController
  skip_before_action :authorized
  def index
    tasks = Task.all
    render json: tasks
  end
  def update
    @task = Task.find_by(id: params[:task][:id])
    @task.helper_id = params[:task][:helper_id]
    if @task.save
      render json: {}, status: 200
    else
      render json: {}, status: 500
    end
  end

  def create
    @task = Task.new(task_params)
    @task.recipient_id = 1
    if @task.valid?
      @task.save
    end
  end

  private
  
  def task_params
    params.require(:task).permit(
      :name,
      :description,
      :duration
    )
  end
end
