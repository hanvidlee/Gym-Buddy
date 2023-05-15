require 'net/http'
require 'uri'

class Api::ExercisesController < ApplicationController
  def index
    url = URI("https://exercisedb.p.rapidapi.com/exercises")

    http = Net::HTTP.new(url.host, url.port)
    http.use_ssl = true

    request = Net::HTTP::Get.new(url)
    request["X-RapidAPI-Key"] = '786ef654bemsh89a3687e7153b6fp13579ejsn98b50a66d1f2'
    request["X-RapidAPI-Host"] = 'exercisedb.p.rapidapi.com'

    response = http.request(request)
    render json: response.read_body

  end

  def show
  end
end
