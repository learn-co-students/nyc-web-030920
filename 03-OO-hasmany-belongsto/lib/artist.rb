class Artist
    attr_accessor :name
    def initialize(name)
        @name = name
    end

    # def name
    # end
    # def name=()
    # end

    def songs
        Song.all.select do |song_instance|
            song_instance.artist == self
        end
    end

    def add_song(song)
        song.artist = self
    end
    def add_song_by_name(name)
        Song.new(name, self)
        # song = Song.new(name)
        # song.artist = self
    end


    def song_count
        self.songs.count
    end

    def self.song_count
        # total_songs = 0
        # Artist.all.each do |artist_instance|
        #     total_songs += artist_instance.song_count
        # end
        # total_songs
        Song.all.count
    end

    # def self.most_songs
    #     Artist.all.max_by do |artist|
    #         artist.song_count
    #     end
    #     # Artist.all.each do |artist_instance|
    #     #     artist_instance.song_count
    #     # end
    # end
end