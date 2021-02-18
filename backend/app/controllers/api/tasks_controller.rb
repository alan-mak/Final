class Api::TasksController < ApplicationController
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
end
