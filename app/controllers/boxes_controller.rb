class BoxesController < ApplicationController
  before_action :authenticate_user!, except: [:index, :show]

  def index
    @boxes = Box.all
  end

  def new
    @box = current_user.boxes.build
  end

  def create
    @box = current_user.boxes.build(box_params)
    if @box.save
      redirect_to @box
    else
      render 'new'
    end
  end

  def show
    @box = Box.find(params[:id])
  end

  def destroy
    @box = Box.find(params[:id])
    @box.destroy

    redirect_to root_path
  end

  def box_params
    params.require(:box).permit(:name)
  end
end
