json.set! :todo do
  json.extract! @todo, :id, :title, :created_at, :updated_at
end