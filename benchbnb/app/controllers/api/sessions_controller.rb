class Api::SessionsController < ApplicationController
    before_action :ensure_logged_in, only: [:destroy]

    def create
        @user = User.find_by_credentials(
            params[:user][:username],
            params[:user][:password]
        )
        if @user
            login!(@user)
            # render :show doesn't work, need to render something else
            render "api/users/show"
        else
            render json: ["invalid credentials"], status: 422
        end
    end

    def destroy
        logout!
        render json: {}
    end
end
