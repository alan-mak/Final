class UserSerializer < ActiveModel::Serializer
  attributes :name,
  :email,
  :password_digest,
  :street,
  :city,
  :province,
  :post_code
end
