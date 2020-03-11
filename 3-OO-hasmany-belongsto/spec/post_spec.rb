require 'spec_helper'

describe 'Post' do
  let!(:post) { Post.new('My Blog Post!') }
  let!(:post2) { Post.new('My Newest Blog Post!') }

  after(:each) do
    Post.class_variable_set(:@@all, [])
  end

  describe '#new' do
    it 'is initialized with an argument of a title' do
      expect { Post.new('Hello World') }.to_not raise_error
    end

    it 'pushes new instances into a class variable called @@all upon initialization' do
      expect(Post.class_variable_get(:@@all)).to match([post, post2])
    end
  end

  describe '@@all' do
    it 'is a class variable set to an array' do
      expect(Post.class_variable_get(:@@all)).to be_a(Array)
    end
  end

  describe '.all' do
    it 'is a class method that returns an array of all post instances that have been created' do
      expect(Post.all).to match([post, post2])
    end
  end

  describe '#title' do
    it 'has a title' do
      expect(post.title).to eq('My Blog Post!')
    end
  end

  describe '#author' do
    it 'belongs to an author' do
      sophie = Author.new('Sophie')
      post.author = sophie
      expect(post.author).to eq(sophie)
    end
  end

  describe '#author_name' do
    it 'knows the name of its author' do
      sophie = Author.new('Sophie')
      post.author = sophie
      expect(post.author_name).to eq('Sophie')
    end

    it 'returns nil if the post does not have an author' do
      expect(post.author_name).to eq nil
    end
  end
  # binding.pry
end
