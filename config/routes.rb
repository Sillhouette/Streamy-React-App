Rails.application.routes.draw do
  # Our stream resources should only be accessed through '/api' urls
  scope '/api' do
    resources :streams
  end
end
