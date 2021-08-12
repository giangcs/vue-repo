<template>

	<div class="row">
		<div class="col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2 col-md-4 col-md-offset-4">
			<div class="login-panel panel panel-default">
				<div class="panel-heading">Log in</div>
				<div class="panel-body">
					<form role="form" method="POST" v-on:submit.prevent="onSubmit" action="">
						<fieldset>
							<div class="form-group">
								<input class="form-control" v-model="email" placeholder="E-mail" name="email" type="email" value="" autofocus="">
							</div>
							<div class="form-group">
								<input class="form-control" v-model="password" placeholder="Password" name="password" type="password" value="">
							</div>
							<div class="checkbox">
								<label>
									<input name="remember" type="checkbox" value="Remember Me">Remember Me
								</label>
							</div>
							<button type="submit" href="" class="btn btn-primary">Login</button >
						</fieldset>
					</form>
				</div>
			</div>
		</div><!-- /.col-->
		{{ email }}
		{{ password }}
	</div><!-- /.row -->
	
</template>

<script>
export default{
    name: 'Login',
    data() {
    return {
      email: null,
      password: null
    }
  },
    methods:{
        onSubmit(){
            this.$anxios
			.post('/api/users',{
				email=this.email,
				password=this.password
			})
			.then((response)=> {
				console.log(response)
			})
			.catch((error)=>{
				console.log(error)
			})
        }
    }
}
</script>
