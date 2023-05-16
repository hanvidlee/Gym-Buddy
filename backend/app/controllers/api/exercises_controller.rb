require 'net/http'
require 'uri'

class Api::ExercisesController < ApplicationController
  def index
    url = URI("https://exercisedb.p.rapidapi.com/exercises")

    http = Net::HTTP.new(url.host, url.port)
    http.use_ssl = true

    request = Net::HTTP::Get.new(url)
    request["X-RapidAPI-Key"] = process.env.API_KEY;
    request["X-RapidAPI-Host"] = 'exercisedb.p.rapidapi.com'

    response = http.request(request)
    render json: response.read_body

  end

  def show
  end
end
