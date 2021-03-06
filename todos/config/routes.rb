# == Route Map
#
#                    Prefix Verb   URI Pattern                                                                              Controller#Action
#                 api_todos GET    /api/todos(.:format)                                                                     api/todos#index {:format=>:json}
#                           POST   /api/todos(.:format)                                                                     api/todos#create {:format=>:json}
#                  api_todo GET    /api/todos/:id(.:format)                                                                 api/todos#show {:format=>:json}
#                           PATCH  /api/todos/:id(.:format)                                                                 api/todos#update {:format=>:json}
#                           PUT    /api/todos/:id(.:format)                                                                 api/todos#update {:format=>:json}
#                           DELETE /api/todos/:id(.:format)                                                                 api/todos#destroy {:format=>:json}
#        rails_service_blob GET    /rails/active_storage/blobs/:signed_id/*filename(.:format)                               active_storage/blobs#show
# rails_blob_representation GET    /rails/active_storage/representations/:signed_blob_id/:variation_key/*filename(.:format) active_storage/representations#show
#        rails_disk_service GET    /rails/active_storage/disk/:encoded_key/*filename(.:format)                              active_storage/disk#show
# update_rails_disk_service PUT    /rails/active_storage/disk/:encoded_token(.:format)                                      active_storage/disk#update
#      rails_direct_uploads POST   /rails/active_storage/direct_uploads(.:format)                                           active_storage/direct_uploads#create

Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: { format: :json } do 
    resources :todos, only: [:index, :show, :create, :destroy, :update]
  end

  root to: 'static_pages#root'
end
