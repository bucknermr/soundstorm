json.key_format! camelize: :lower

json.extract! comment, :id, :body, :created_at, :author_id
