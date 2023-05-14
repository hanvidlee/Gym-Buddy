Rails.application.routes.draw do

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api do
    resources :users
    post 'login', to: 'users#login'

    resources :workouts
    
    resources :user_workouts

    resources :exercises, only: [:index, :show]

    resources :reps, only: [:index, :show, :new, :create, :delete]

    resources :exercise_sets

    resources :set_workouts

    resources :days

  end
end
