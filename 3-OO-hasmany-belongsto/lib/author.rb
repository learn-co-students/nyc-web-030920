class Author
    attr_accessor :name
    def initialize(name)
        @name = name
    end

    #.each
    #.map/.collect
        # return an array
    #.find
        # return the first element that matches a condition
    #.select
        # return an array of all of the elements that matches a condition

    def posts
        Post.all.select do |post_instance|
            post_instance.author == self
        end
    end
    
    def add_post(post)
        post.author = self
    end

    def add_post_by_title(title)
        Post.new(title, self)
    end

    def post_count 
        self.posts.count
    end

    def self.post_count
        # total_posts = 0
        # Author.all.each do |author|
        #     total_posts += author.post_count
        # end
        # total_posts
        Post.all.count
    end
end