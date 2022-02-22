class Api::UsersController < ApplicationController
    
    def create
        @user = User.create(user_params)
        if @user.save
            login!
            # will need another line
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    ##user_params
