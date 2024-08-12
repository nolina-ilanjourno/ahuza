set +e

docker build -f Dockerfile.production -t europe-west9-docker.pkg.dev/claudeallouche/ahuza/ahuza:lasted . || true &&
docker push europe-west9-docker.pkg.dev/claudeallouche/ahuza/ahuza:lasted || true &&
gcloud run deploy ahuza --image europe-west9-docker.pkg.dev/claudeallouche/ahuza/ahuza:lasted --platform managed --region europe-west1 --allow-unauthenticated || true &&

set -e