json.set! :todos do
  json.array! @todos do |todo|
    json.extract! todo, :id, :title, :created_at, :updated_at
  end
end