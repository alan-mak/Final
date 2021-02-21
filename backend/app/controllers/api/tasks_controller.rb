class Api::TasksController < ApplicationController
  skip_before_action :authorized
  def index
    tasks = Task.all
    render json: tasks
  end
  def update
    @task = Task.find_by(id: params[:task][:id])
    @task.helper_id = params[:task][:helper_id]
    @task.accepted_at = params[:task][:accepted_at]
    @task.completed_at = params[:task][:completed_at]
    if @task.save
      render json: {}, status: 200
    else
      render json: {}, status: 500
    end
  end

  def create
    @task = Task.new(task_params)
    if @task.valid?
      @task.save
    end
  end

  private
  
  def task_params
    params.require(:task).permit(
      :name,
      :description,
      :duration,
      :recipient_id
    )
  end
end
