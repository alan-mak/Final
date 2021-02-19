class UserSerializer < ActiveModel::Serializer
  attributes :id,
  :name,
  :email,
  :password_digest,
  :street,
  :city,
  :province,
  :post_code,
  :lat,
  :long
end
