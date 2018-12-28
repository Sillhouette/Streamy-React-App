Rails.application.routes.draw do
  scope '/api' do
    resources :streams
  end
end
