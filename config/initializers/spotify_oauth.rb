OmniAuth::Strategies::OAuth2.module_eval do 

  option :include_query_string, false

    def build_access_token
      verifier = request.params["code"]
      url = options.include_query_string ? callback_url : (full_host + script_name + callback_path)
      client.auth_code.get_token(verifier, {:redirect_uri => url}.merge(token_params.to_hash(:symbolize_keys => true)), deep_symbolize(options.auth_token_params))
    end
end