FROM golang:alpine as test

WORKDIR /go/src/app

COPY . .

RUN CGO_ENABLED=0 go build -o /app codeeducation.go

FROM scratch

COPY --from=test /app /app

CMD ["/app"]