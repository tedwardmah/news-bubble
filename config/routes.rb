Rails.application.routes.draw do

  resources :users

  resources :articles

  resources :words 
  root :to => "words#index"


end
