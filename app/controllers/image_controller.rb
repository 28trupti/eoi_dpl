class ImageController < ApplicationController
    include Rails.application.routes.url_helpers
    
    def create
        current_user.image.attach(params[:image])
        render json: {success: true, data: {url: rails_blob_url(current_user.image)}}
    end
end
