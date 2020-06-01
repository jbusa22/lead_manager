# case6

### Check python version (>=3.6.8)
python3 --version

### Install HomeBrew and python3 (if not installed)
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

brew install python3

### Setup Virtual Environment.

virtualenv -p python3 env

source env/bin/activate

### Install required dependencies.
pip3 install -r requirements.txt

Note: If you get an error when installing mysqlclient, run the following: export LDFLAGS="-L/usr/local/opt/openssl/lib" export CPPFLAGS="-I/usr/local/opt/openssl/include" and try re-installing dependencies.

### Run Migrations.
python3 manage.py migrate
