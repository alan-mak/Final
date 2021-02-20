Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api do
    resources :users
    post '/users/login', to: 'auth#create'
    post '/users/register', to: 'users#create'
    resources :tasks
    resources :messages
  end
  
end
