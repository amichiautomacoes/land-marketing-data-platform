FROM python:3.12-slim

WORKDIR /app
ENV PYTHONUNBUFFERED=1 HOST=0.0.0.0 PORT=8000
COPY run.py ./
COPY site/ ./site/
USER 10001:10001
EXPOSE 8000
CMD ["python", "run.py"]
