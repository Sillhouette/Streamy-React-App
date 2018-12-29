##
# => Add rake task to start foreman on port 3000
##
task :start do
  exec 'foreman start -p 3000'
end
