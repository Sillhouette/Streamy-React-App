Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :streams
    end
end
  # app.get('*', (req, res) => {
  #   res.sendFile(path.join(__dirname, '/client/build/index.html'));
  # });
  get '*path', to: "application#fallback_index_html", constraints: ->(request) do
    !request.xhr? && request.format.html?
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
