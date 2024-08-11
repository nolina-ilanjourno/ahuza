set +e

docker build -f Dockerfile.production -t europe-west9-docker.pkg.dev/claudeallouche/api/api:lasted . || true &&
docker push europe-west9-docker.pkg.dev/claudeallouche/api/api:lasted || true &&
gcloud run deploy api --image europe-west9-docker.pkg.dev/claudeallouche/api/api:lasted --platform managed --region us-central1 --allow-unauthenticated || true &&

set -e