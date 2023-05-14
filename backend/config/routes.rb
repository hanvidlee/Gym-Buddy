Rails.application.routes.draw do
  get 'exercises/index'
  get 'exercises/show'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api do
    resources :users
    post 'login', to: 'users#login'

    resources :workouts
    
    resources :user_workouts

    resources :exercises, only: [:index, :show]
  end
end
