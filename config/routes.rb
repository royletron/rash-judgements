RashJudgements::Application.routes.draw do
  resources :venues


  authenticated :user do
    root :to => 'home#index'
  end
  root :to => "home#index"
  devise_for :users, :controllers => { :omniauth_callbacks => "users/omniauth_callbacks" }
  resources :users
  
  match '/get_places' => 'venues#get_places'
  match '/get_info' => 'venues#get_info'
end