FactoryGirl.define do
  factory :user do
    sequence(:email) {|n| "Test_user#{n}@example.com" } 
    sequence(:name) {|n| "User#{n}"}
    password "please123"

  end
end



### Create Albums ###
require 'csv'
@lib=CSV.read("db/authorbeard.csv", {headers: true, header_converters: :symbol})

  @lib.each {|r|
    album=Album.find_or_create_by(title: r[:title])
    album.artist=Artist.find_or_create_by(name: r[:artist])
    album.rel_date=r[:released].to_i
    album.rel_id=r[:release_id].to_i
    album.search_q="#{r[:artist]} #{r[:release_id]}"
    album.save

  }

### Create Users ###

me=User.create(email: "admin@spinner.com", password: "records", name: "coderbeard")

5.times{FactoryGirl.create(:user)}


### Give Users some albums ###
User.all.each{|u|
  u.albums << Album.where(id: [(u.id+5)..(u.id+50)])
  u.save

}

### Set up some spins ###

User.all.each{|u|
    u.user_albums.each{|ua|
        ua.update(spins: (ua.id + u.id))
    }
}

### Add in some unplayed albums ###
User.all.each{|u|
    u.albums << Album.where(id: [(u.id)..(u.id+4)])
    u.save
}





