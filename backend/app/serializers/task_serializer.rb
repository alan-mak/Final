class TaskSerializer < ActiveModel::Serializer
  attributes :id,
  :name,
  :description,
  :recipient_id,
  :helper_id,
  :duration,
  :accepted_at,
  :completed_at,
  :created_at
end
