get '/' do
  # La siguiente linea hace render de la vista 
  # que esta en app/views/index.erb
  erb :index
end

post '/profile' do
  username = params[:username]
  @user = User.find_by(username: username)
  session[:user_id] = @user.id
  if @user
    redirect to ("/profile/#{@user.id}")
  else 
    erb :index
  end
end

get '/profile/:id' do
  user_id = params[:id]
  @user = User.find(user_id)
  erb :profile
end

post '/create_user' do
  username = params[:username]
  User.create(username: username)
  @user = User.find_by(username: username)
  session[:user_id] = @user.id
  redirect to ("/profile/#{@user.id}")
end

get '/create_survey/:id' do
  user_id = params[:id]
  @user = User.find(user_id)

  erb :create_survey
end


post '/create_survey' do
  title = params[:title]
  user_id = session[:user_id]
  redirect to ("/create_survey/#{user_id}")
end

post '/answer_survey' do


end


