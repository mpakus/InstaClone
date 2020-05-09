# frozen_string_literal: true

class UserSerializer
  def initialize(user)
    @user = user
  end

  def present
    return {} if user.blank?

    prepare_user
  end

  private

  attr_reader :user

  def prepare_user
    {
      uid:    user.uid,
      name:   user.name,
      avatar: user.avatar.attached? ? user_avatar : default_avatar,
      email:  user.email
    }
  end

  def url_for(url)
    Rails.application.routes.url_helpers.url_for(url)
  end

  def user_avatar
    url_for user.avatar.variant(
      combine_options: { auto_orient: true, gravity: 'center', resize: '150x150^', crop: '150x150+0+0' }
    )
  end

  def default_avatar
    'https://picsum.photos/150'
  end
end
