class User < ApplicationRecord
    #FIGVAPER

    def self.find_by_credentials(username, password)
        user = User.find_by(username: username)
        if user && user.is_password?(password)
            user
        else
            nil
        end
    end

    def is_password?(password)
        Bcrypt::
    end
end
