require 'uri'

# can't use find_or_create_by because of Devise password
unless User.find_by(email: 'test@user.com')
  User.create(
    name: 'Test User',
    email: 'test@user.com',
    password: 'Password9'
  )
end

def user
  User.order('RANDOM()').take
end

# use https://picsum.photos/ for placeholders
images = JSON.parse(File.read( Rails.root.join('db/images.json') ))

images.each do |img|
  post = user
           .posts
           .new(content: img['author'])
  post.save(validate: false)

  uri = URI.parse(img['download_url'])
  post.image.attach(io: URI.open(img['download_url']), filename: File.basename(uri.path),  content_type: 'image/jpg')

  putc '.'
end
