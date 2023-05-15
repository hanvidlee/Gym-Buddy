require 'net/http'

class ExerciseAPI
  API_BASE_URL = 'https://api.api-ninjas.com/v1'
  API_KEY = ENV['API_KEY']

  def self.get_exercises_by_muscle(muscle)
    api_url = "#{API_BASE_URL}/exercises?muscle=#{muscle}"
    uri = URI(api_url)
    request = Net::HTTP::Get.new(uri)
    request['X-Api-Key'] = API_KEY

    response = Net::HTTP.start('localhost', 3001, use_ssl: uri.scheme == 'https') do |http|
      http.request(request)
    end

    if response.code == '200'
      JSON.parse(response.body)
    else
      raise "Error: #{response.code} #{response.body}"
    end
  end
end