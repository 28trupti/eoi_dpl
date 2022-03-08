Rails.application.routes.draw do
  resources :eoi_questionaires
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  devise_for :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root to: "home#index"
  post 'save_attachment' => "home#save_attachment"
  get 'thankyou', to: 'home#thankyou'

end
