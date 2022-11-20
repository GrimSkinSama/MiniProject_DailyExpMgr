package miniproject.bca.co.id.DailyExpenseManager.config;

import miniproject.bca.co.id.DailyExpenseManager.service.UserDetailService;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class BasicSecurityConfiguration {

    @Bean
    public UserDetailService userDetailService(){return new UserDetailService();}

    @Bean
    public BCryptPasswordEncoder bCryptPasswordEncoder(){return new BCryptPasswordEncoder();}

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception{
        http
                .cors().and()
                .csrf().disable()
                .httpBasic()
                .and()
                .authorizeHttpRequests()
                .mvcMatchers(HttpMethod.GET,"/**").permitAll()
                .mvcMatchers(HttpMethod.POST,"/**").permitAll()
                .mvcMatchers(HttpMethod.PUT,"/**").permitAll()
                .mvcMatchers(HttpMethod.DELETE,"/**").permitAll()
                .anyRequest().authenticated()
                .and()
                .formLogin().permitAll()
                .and()
                .logout().permitAll();

        return http.build();

    }
}
