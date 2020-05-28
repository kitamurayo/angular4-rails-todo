FROM ruby:2.4.0

RUN mkdir /rails5-todo-api
WORKDIR /rails5-todo-api

ENV LANG=C.UTF-8 BUNDLE_GEMFILE=/rails5-todo-api/Gemfile BUNDLE_JOBS=2 BUNDLE_PATH=/bundle

RUN apt-get update -qq && apt-get install -y build-essential libpq-dev mysql-client nodejs npm

ADD Gemfile Gemfile.lock /rails5-todo-api/
RUN gem install bundler
RUN bundle install

ADD . /rails5-todo-api