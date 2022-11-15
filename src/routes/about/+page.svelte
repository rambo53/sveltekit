<script>

import { env as public_env} from '$env/dynamic/public'

let message = "";

fetch(public_env.PUBLIC_URL_API+'test',{
  method: 'GET',
})
  .then((response) => response.json())
  .then((data) => message = data.message);
    
</script>

<h1>about</h1>

<p>{message}</p>
